import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {colors} from '../../../../utils';
import {WindChartProps} from '../../interface';
import Icon from '../../../../components/fontAwesome';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const WindChart = (props: WindChartProps) => {
  const {data, status} = props;

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
    ? data.map((item: any) => {
        return item.temp;
      })
    : [];
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: temps,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 4, // optional
      },
    ],
    // legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView contentContainerStyle={styles.windchartRoot} horizontal>
      {status === 'pending' ? (
        <View style={styles.windIndicator}>
          <ActivityIndicator color={colors.gray} size={40} />
        </View>
      ) : (
        <View style={styles.windContentContainer}>
          <LineChart
            style={styles.chart}
            data={chartData}
            width={screenWidth * 5}
            height={150}
            chartConfig={chartConfig}
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withShadow={false}
            withInnerLines={false}
            withOuterLines={false}
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
                          <Icon
                            color={'white'}
                            size={12}
                            name={'location-arrow'}
                            solid
                          />
                        </View>
                      </View>

                      <Text style={styles.chartWindText}>
                        {item.wind_speed} m/s
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.white}>
                        {Math.floor(item.temp)}°C
                      </Text>
                      <Text style={styles.white}>
                        {index === 0 ? 'Agora' : `${item.hour}:00`}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default WindChart;
