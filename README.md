- ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?



- ¿Hay alguna mejora que pueda hacer en su envío?



- ¿Qué haría de manera diferente si se le asignara más tiempo?



export DEBUG=1

pip freeze > requirements.txt


python -m gunicorn checdoc.wsgi:application --reload --workers 4
