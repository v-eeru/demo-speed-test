from flask import Flask, render_template, jsonify
import speedtest

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/speedtest")
def speed_test():

    st = speedtest.Speedtest()
    st.get_best_server()

    download = st.download() / 1000000
    upload = st.upload() / 1000000
    ping = st.results.ping

    return jsonify({
        "download": round(download, 2),
        "upload": round(upload, 2),
        "ping": round(ping, 2)
    })


if __name__ == "__main__":
    app.run(debug=True)