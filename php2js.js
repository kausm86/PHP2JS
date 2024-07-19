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

  /**
   * Returns an integer.
   * @param {number} start - The input start value.
   * @param {number} end - The input end value.
   * @returns {array} arr - The returning array.
   */

  range: function (start, end)
  {
    const arr = [];

    for ( let i = start; i <= end; i++ )
    {
      arr.push(i);
    }

    return arr;
  }
};
