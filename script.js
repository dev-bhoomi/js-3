function generate(){
    var quotes={
        "-Bhoomi Gupta" : '"Don’t worry so much about how long you’ve been doing it. Make today count. Focus on what you can do right now. That advice seemed to work well for Muhammed Ali. It can serve you well too, by keeping you in motion and not worrying about the past or future, of which you have no control over."',
        "-Walt Disney" : '"All our dreams can come true; if we have the courage to pursue them."',
        "– Harvey MacKay" :'"People begin to become successful the minute they decide to be"'
    }

    var authors= Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML= quote;
    document.getElementById("author").innerHTML=author;
}