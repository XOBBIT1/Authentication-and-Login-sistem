import datetime
from typing import AsyncGenerator

from fastapi import Depends
import sqlalchemy as db
from fastapi_users.db import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base
from sqlalchemy.orm import sessionmaker

from bd_config.models import role
from config_main import config_settings

DATABASE_URL = f'postgresql+asyncpg://{config_settings.user}:{config_settings.password}' \
               f'@{config_settings.host}:{config_settings.port}/{config_settings.db_name}'

Base: DeclarativeMeta = declarative_base()


class User(SQLAlchemyBaseUserTable[int], Base):
    id = db.Column(db.Integer, primary_key=True, index=True)
    email = db.Column(db.String, unique=True, index=True)
    username = db.Column(db.String, nullable=False)
    registered_at = db.Column(db.TIMESTAMP, default=datetime.datetime.utcnow())
    role_id = db.Column(db.Integer, db.ForeignKey(role.c.id), default=1)
    hashed_password = db.Column(db.String, nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    is_superuser = db.Column(db.Boolean, default=False, nullable=False)
    is_verified = db.Column(db.Boolean, default=False, nullable=False)


engine = create_async_engine(DATABASE_URL)
async_session_maker = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)
