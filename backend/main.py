import fastapi.security
from fastapi import Depends

from fastapi_users import FastAPIUsers

from bd_config.database_config import User
from bd_config.schemas import UserRead, UserCreate
from config_main.cookie import auth_backend
from bd_config.manager import get_user_manager

app = fastapi.FastAPI()

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)


current_user = fastapi_users.current_user(active=True)
super_user = fastapi_users.current_user(superuser=True)


@app.get("/activate_user")
def activate_user(user: User = Depends(super_user)):
    return "User activated!"


@app.get("/deactivate_user")
def deactivate_user(user: User = Depends(super_user)):
    return "User deactivated!"

