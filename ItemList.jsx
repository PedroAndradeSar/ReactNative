import React from "react";
import { Text, View } from "react-native";

const ItemList = ({ itens }) => {
    return (
      <View style={{alignItems: "center", justifyContent: "center"}}>
        {itens.map((item) => (
          <View key={item.id}>
            <Text style={{ fontWeight: "bold",fontStyle: "italic" }}>{item.id}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
            <Text style={{ fontStyle: "italic" }}>{item.descricao}</Text>
          </View>
        ))}
      </View>
    );
  };

export default ItemList;