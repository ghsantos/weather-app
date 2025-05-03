import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type CurvedHeaderProps = {
  width?: number;
  height?: number;
  curveHeight?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
  title?: string;
};

export const CurvedHeader = ({
  width = Dimensions.get('window').width,
  height = 80,
  curveHeight = 40,
  backgroundColor = 'white',
  children,
  title,
}: CurvedHeaderProps) => {
  const createPath = () => {
    const topY = curveHeight;
    return `M0,${height} L0,${topY + 30} Q0,0 42,00 Q${width / 2},${topY - 4} ${width - 42},${topY - 20} Q${width},0 ${width},${topY + 30} L${width},${height} Z`;
  };

  return (
    <View style={styles.container}>
      <Svg width={width} height={height} style={styles.svg}>
        <Path d={createPath()} fill={backgroundColor} />
      </Svg>
      <View style={[styles.contentContainer, { height }]}>
        {title && <Text style={styles.title}>{title}</Text>}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 'auto',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    paddingTop: 25,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
});
