import datetime

import sqlalchemy as db

metadata = db.MetaData()

role = db.Table(
    "role",
    metadata,
    db.Column("id", db.Integer, primary_key=True),
    db.Column("name", db.String, unique=True, index=True, nullable=False),
    db.Column("permissions", db.JSON)
)

user = db.Table(
    "user",
    metadata,
    db.Column("id", db.Integer, primary_key=True),
    db.Column("email", db.String, unique=True, index=True),
    db.Column("username", db.String,  nullable=False),
    db.Column("registered_at", db.TIMESTAMP, default=datetime.datetime.utcnow()),
    db.Column("role_id", db.Integer, db.ForeignKey(role.c.id)),
    db.Column("hashed_password", db.String, nullable=False),
    db.Column("is_active", db.Boolean, default=True, nullable=False),
    db.Column("is_superuser", db.Boolean, default=False, nullable=False),
    db.Column("is_verified", db.Boolean, default=False, nullable=False)
)
