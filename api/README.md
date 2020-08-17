# EvolveU API Server

Python and pipenv is required to run the API Server.

If you have a version of Python that is at least 3.? you will be fine. To check enter:

```
python -V
```

On some systems you may need to enter:

```
python3 -V
```

If you do not have at least version python 3, install the suggested version of python using the instructions at [downloads](https://www.python.org/downloads/).

Once python is installed, check to see if pipenv is installed on your computer. To do this enter:

```
pipenv ?
```

If you get a "command not found", you may need to add Python to your environment variables on your computer.

Now check to see if pipenv has been installed properly:

```
pipenv ?
```

Now enter the following command to install dependencies. 

```
pipenv install
```

Every time you start the API server you must be in the correct directory and start the python environment. Make sure you are in the api folder.

```
pipenv shell # starts the virtual environment
python web.py # starts our API
```

In your browser address enter the following: http://localhost:5000
You should see a welcome screen (clock).

You can now navigate to the 05-react folder and enter ```npm start``` to play with Cities react page.

