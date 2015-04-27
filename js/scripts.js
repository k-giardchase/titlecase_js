var titleCase = function(words) {

  var word_array = words.split(" ");

  var title_cased_words = [];
  title_cased_words.push(word_array[0].charAt(0).toUpperCase() + word_array[0].slice(1));

  for(var i = 1; i < word_array.length; i++)
  {
    if (word_array[i] === 'in' || word_array[i] === 'the' || word_array[i] === 'a' || word_array[i] === "an" || word_array[i] === "at"|| word_array[i] === "by" || word_array[i] ==="for" || word_array[i] === "of" || word_array[i] ==="on" || word_array[i] === "to" || word_array[i] ==="up" || word_array[i] ==="and" || word_array[i] === "as" || word_array[i] === "but" || word_array[i] === "it" || word_array[i] === "or" || word_array[i] === "nor" || word_array[i] === 'is')
    {
        title_cased_words.push(word_array[i]);
    }

    else
    {
        var caps = word_array[i].charAt(0).toUpperCase() + word_array[i].slice(1);
        title_cased_words.push(caps);
    }
  }

  return title_cased_words.join(" ");
};

$(document).ready(function() {
  $('form#titleCaseForm').submit(function(event) {
    var words = $('input#inputWords').val();
    var result = titleCase(words);

    $(".title_result").empty();

    $(".title_result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});

/*
<form id="titleCaseForm">
    <label for="inputWords">Enter words</label>
    <input name="inputWords" id="inputWords" type="text" placeholder="words here" class="form-control">
    <button type="submit" class="btn btn-warning">Submit</button>
*/
