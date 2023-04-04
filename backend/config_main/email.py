import smtplib
from email.message import EmailMessage

from config_main.config_settings import email_password, email_host, email_host_name


def send_mail(email: str, content: str):

    msg = EmailMessage()
    msg["Subject"] = "Registration"
    msg["From"] = email_host_name
    msg["To"] = email
    msg.set_content(
       content
    )

    with smtplib.SMTP_SSL(email_host, 465) as smtp:
        smtp.login(email_host_name, email_password)
        smtp.send_message(msg)
    return "email successfully sent"
    