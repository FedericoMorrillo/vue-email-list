"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      //creo un array vuoto per poter poi iterare all' interno
      emails: [],
    };
  },
  mounted() {
    //ciclo per poter invocare il metodo get 10 volte ed ottenere email con risultati diversi per poi pusharli nell' array
    for (let i = 0; i < 10; i++)
      axios.get(this.apiUrl).then((response) => {
        this.emails.push(response.data.response);
      });
  },
}).mount("#app");
