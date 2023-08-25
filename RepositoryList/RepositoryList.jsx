import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const RepositoryList = () => {

  const style = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 30
  },
  beer: {
    backgroundColor: "green",
    padding: 20,
    fontWeight: "bold"
  },
  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold"
  },
  style: {
    fontSize: 20,
    fontWeight: "bold"
  },
  RowItens: {
    flexDirection: "row"
  }
});

  const [cerveja, setCerveja] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/v2/beers?size=10")
      .then((response) => {
        setCerveja(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text style={style.title}>Lista de cervejas</Text>
      <View>
        {cerveja.map((beer) => (
          <View style={style.beer} key={beer.id}>
            <View style={style.RowItens}>
              <Text style={style.name}>nome: </Text>
              <Text style={style.name}>{beer.name}</Text>
            </View>
            
            <View style={style.RowItens}>
              <Text style={style.style}>marca: </Text>
              <Text style={style.style}>{beer.style}</Text>
            </View>

            <View style={style.RowItens}>
              <Text style={style.brand}>estilo: </Text>
              <Text style={style.brand}>{beer.brand}</Text>
            </View>

          </View>
        ))}
      </View>
    </View>
  );
};

export default RepositoryList;