import os
import dotenv
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

dotenv_file = os.path.join(BASE_DIR, ".env")

if os.path.isfile(dotenv_file):
    dotenv.load_dotenv(dotenv_file)


# auth_settings
secret_for_auth = os.environ["SECRET_FOR_AUTH"]
secret = os.environ["SECRET"]
# bd_settings
host = os.environ['HOST']
user = os.environ['USER']
password = os.environ['PASSWORD']
db_name = os.environ['DB_NAME']
port = os.environ["PORT"]
#email_settings
email_host_name = os.environ["EMAIL_HOST_USER"]
email_password = os.environ["EMAIL_HOST_PASSWORD"]
email_host = os.environ["EMAIL_HOST"]
