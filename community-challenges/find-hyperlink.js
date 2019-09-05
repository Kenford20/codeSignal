// You are given a string, text, containing exactly one correct hyperlink.

// It is guaranteed that the hyperlink has the following format: <a href="URL">some text</a>, where URL, some text and the text surrounding the hyperlink within text do not contain characters '<' and '>'.

// Your task is to find the hyperlink and return its URL.

// Example

// For text = "<a href="http://www.example.org">Example1</a>", the output should be
// findHyperlink(text) = "http://www.example.org";
// For text = "a href="http://www.wrong.org"<a href="correct">Example2 a href /a</a> URL", the output should be
// findHyperlink(text) = "correct".

function findHyperlink(text) {
    const anchor = text.match(/<a href=".*">/)[0];
    return anchor.slice(9, anchor.length - 2);
}
