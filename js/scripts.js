var titleCase = function(words) {

    var word_array = words.split(" ");

    var title_cased_words = [];
    title_cased_words.push(word_array[0].charAt(0).toUpperCase() + word_array[0].slice(1));

    for(var i = 1; i < word_array.length; i++)
    {
        if (word_array[i] === 'in' || word_array[i] === 'the' || word_array[i] === 'a' || word_array[i] === "an" || word_array[i] === "at"|| word_array[i] === "by" || word_array[i] ==="for" || word_array[i] === "of" || word_array[i] ==="on" || word_array[i] === "to" || word_array[i] ==="up" || word_array[i] ==="and" || word_array[i] === "as" || word_array[i] === "but" || word_array[i] === "it" || word_array[i] === "or" || word_array[i] === "nor")
        {
            title_cased_words.push(word_array[i]);
        }

        else
        {
            var caps = word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1);
            title_cased_words.push(caps);
        }
    }

    //test two
    return title_cased_words.join(" ");

};
