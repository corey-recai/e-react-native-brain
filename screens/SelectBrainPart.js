import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Container} from "../components/container/index"

const brainParts = [
  { label: 'Frontal Lobe', value: 'frontalLobe', icon: 'F' },
  { label: 'Temporal Lobe', value: 'temporalLobe', icon: 'T' },
  { label: 'Occipital Lobe', value: 'occipitalLobe', icon: 'O' },
  { label: 'Parietal Lobe', value: 'parietalLobe', icon: 'P' },
  // Add more brain parts here
];

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  gridItem: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    width: 100,
  },
  gridItemSelected: {
    backgroundColor: 'skyblue',
  },
});

function SelectBrainPart({ onSelect }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectItem = (value) => {
    setSelectedValue(value);
    onSelect(value); // Call function passed as a prop
  };

  return (
    <Container>
      <View style={styles.gridContainer}>
        {brainParts.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[styles.gridItem, selectedValue === item.value && styles.gridItemSelected]}
            onPress={() => handleSelectItem(item.value)}
          >
            <Text>{item.icon}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
}

export default SelectBrainPart;
