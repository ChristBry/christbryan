from flask import Flask, render_template, request
from openai import OpenAI
import os


app = Flask(__name__)

# Set up OpenAI API credentials 
# openai.api_key = os.environ.get("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")
client = OpenAI(
    # This is the default and can be omitted
    api_key=os.environ.get("OPENAI"),
)


# Define the default route to return the index.html file
@app.route("/")
def index():
    return render_template("index.html")

# Define the /api route to handle POST requests
@app.route("/api", methods=["POST"])
def api():
    # Get the message from the POST request
    message = request.form.get("message")
    # Send the message to OpenAI's API and receive the response
    print(message)
    
    chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": message,
        }
    ],
    model="gpt-3.5-turbo",
)
    #completion = openai.ChatCompletion.create(
    #model="gpt-3.5-turbo-0613",
    #messages=[
        #{"role": "user", "content": message}
    #]
    #)

    reponse = chat_completion.choices[0].message.content
    
    if reponse!=None:
        return reponse

    else :
        return 'Failed to Generate response!'
    


if __name__=='__main__':
    app.run()

