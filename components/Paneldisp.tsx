import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Paneldisp: React.FC = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<string>('bdtb7pkx2vb40c/new-dashboard');

  const dashboards = [
    { label: 'Dashboard 1', value: 'bdtb7pkx2vb40c/new-dashboard' },
    { label: 'Import Dash Test', value: 'cLV5GDCkz/import-dash-test' },
  ];

  const dashboardPanels: { [key: string]: number[] } = {
    'bdtb7pkx2vb40c/new-dashboard': [1, 2, 3],
    'cLV5GDCkz/import-dash-test': [1, 2],
  };

  const panelIds = dashboardPanels[selectedDashboard] || [];

  if (panelIds.length === 0) {
    return <Text>No panels available for this dashboard.</Text>;
  }

  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <Picker
          selectedValue={selectedDashboard}
          onValueChange={(itemValue: string) => setSelectedDashboard(itemValue)}
        >
          {dashboards.map((dashboard) => (
            <Picker.Item
              label={dashboard.label}
              value={dashboard.value}
              key={dashboard.value}
            />
          ))}
        </Picker>
      </View>

      {panelIds.map((panelId: number, index: number) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Image
            source={{
              uri: `http://192.168.0.110:3000/render/d-solo/${selectedDashboard}?orgId=1&panelId=${panelId}&width=500&height=250&scale=1&tz=Asia%2FCalcutta`,
            }}
            style={{ width: '100%', height: 200 }}
            resizeMode="contain"
          />
        </View>
      ))}
    </View>
  );
};

export default Paneldisp;
