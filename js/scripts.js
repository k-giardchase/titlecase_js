var titleCase = function(words) {

    var word_array = words.split(" ");

    var title_cased_words = [];
    for(var i = 0; i<word_array.length; i++)
    {
        if(word_array[i].length === 1)
        {

            word_array[i].charAt(0).toUpperCase();
            title_cased_words.push(word_array[i]);
        }
        else
        {
            word_array[i];
            var caps = word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1);
            title_cased_words.push(caps);
        }

    }

    //test two
    return title_cased_words.join(" ");

};
