const PHP2JS = {
  explode: function (delimiter, string)
  {
    return string.split(delimiter);
  },

  implode: function (glue, pieces)
  {
    return pieces.join(glue);
  },

  str_replace: function (search, replace, subject)
  {
    return subject.split(search).join(replace);
  },
};
