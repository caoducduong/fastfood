import Vue from 'vue'

Vue.filter("formatCurrency", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
});