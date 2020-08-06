import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {images} from '../../../utils';
import {CurrentProps} from '../interface';
import Icon from '../../../components/fontAwesome';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const WindChart = (props: CurrentProps) => {
  const {data} = props;
  const date = new Date();
  const hour = date.getHours();
  console.log('hour', hour);

  const labels = data
    ? data.map((item: any, index: number) => {
        if (index === 0) {
          return 'Agora';
        }

        return `${Math.floor(item.temp)}°C
        `;
      })
    : [];
  const temps = data
    ? data.map((item) => {
        return item.temp;
      })
    : [];
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: temps,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 4, // optional
      },
    ],
    // legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
      fontSize: 15,
      height: 60,
    },
  };

  return (
    <ScrollView horizontal>
      <View>
        <LineChart
          style={styles.chart}
          data={chartData}
          width={screenWidth * 5}
          height={220}
          chartConfig={chartConfig}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withShadow={false}
          withInnerLines={false}
        />
        <View style={styles.labelContainer}>
          {data &&
            data.map((item: any, index: number) => {
              return (
                <View style={styles.chartLabelItemContainer} key={index}>
                  <View style={styles.chartLabelItemSubContainer}>
                    <View style={styles.locationArrowContainer}>
                      <View
                        style={[
                          {
                            transform: [{rotateZ: `${item.wind_deg}deg`}],
                          },
                          styles.locationArrowSubContainer,
                        ]}>
                        <Icon size={12} name={'location-arrow'} solid />
                      </View>
                    </View>

                    <Text style={styles.chartWindText}>
                      {item.wind_speed} m/s
                    </Text>
                    {/* <Text></Text> */}
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default WindChart;
