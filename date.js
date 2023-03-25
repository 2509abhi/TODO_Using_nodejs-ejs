exports.getDate = function () {
  const today = new Date();
  const opt = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return  today.toLocaleDateString("en-US", opt);
};
exports.getDay = function () {
  const today = new Date();
  const opt = {
    weekday: "long"
  };
  return  today.toLocaleDateString("en-US", opt);
};
