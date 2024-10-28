import React from 'react';

const data = [
    { id: 1, name: "Juan R. Aguilar" },
    { id: 2, name: "Juan F. Ulloua" },
    { id: 3, name: "Abel L. Ruiz" },
    { id: 4, name: "Marcela J. Gutierrez" },
    { id: 5, name: "Roger J. Aguilera" },
    { id: 6, name: "Diana E. Paz" },
    { id: 7, name: "Jose A. Fernandez" },
    { id: 8, name: "Julissa E. Hoya" },
    { id: 9, name: "Cristian A. Espinoza" },
    { id: 10, name: "Tatiana W. Guilllen" },
  ];

  const listTimes = [
    { id: 3, title: "3" },
    { id: 5, title: "5" },
    { id: 10, title: "10" },
    { id: 15, title: "15" },
  ];

    export  function getListUser () {
        return data;
    }

    export  function getListTimes () {
        return listTimes;
    }