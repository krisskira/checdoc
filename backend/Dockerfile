# syntax=docker/dockerfile:1
FROM python:3.9.6-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . /backend/
CMD ["python", "-m", "gunicorn", "checdoc.wsgi:application", "--reload", "--workers 4"]