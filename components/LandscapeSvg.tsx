import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, G, Defs, LinearGradient, Stop } from 'react-native-svg';

type LandscapeSvgProps = {
  width: number;
  height: number;
  isNight?: boolean;
};

type ColorType = {
  sky: string[];
  mountains: string[];
  hills: string[];
  ground: string;
  houses: string[];
  roofs: string[];
  sun?: string;
  moon?: string;
};

export const LandscapeSvg = ({ width, height, isNight = false }: LandscapeSvgProps) => {
  const dayColors: ColorType = {
    sky: ['#87CEEB', '#1E90FF'],
    sun: '#FDB813',
    mountains: ['#aaccff', '#8aacdf', '#6a8caf'],
    hills: ['#a8e6cf', '#dcedc1', '#ffd3b6'],
    ground: '#5D4037',
    houses: ['#f8f9fa', '#e9ecef', '#dee2e6'],
    roofs: ['#e63946', '#d62828', '#c1121f'],
  };

  const nightColors: ColorType = {
    sky: ['#0f2027', '#203a43'],
    moon: '#FFFFFF',
    mountains: ['#3a4a5a', '#2a3a4a', '#1a2a3a'],
    hills: ['#2d3748', '#1a202c', '#171923'],
    ground: '#2D3748',
    houses: ['#4a5568', '#2d3748', '#1a202c'],
    roofs: ['#1a202c', '#171923', '#0d1117'],
  };

  const colors = isNight ? nightColors : dayColors;

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Defs>
          <LinearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={colors.sky[0]} />
            <Stop offset="100%" stopColor={colors.sky[1]} />
          </LinearGradient>
          <LinearGradient id="hillGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={colors.hills[0]} />
            <Stop offset="100%" stopColor={colors.hills[1]} />
          </LinearGradient>
          <LinearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={colors.hills[1]} />
            <Stop offset="100%" stopColor={colors.hills[2]} />
          </LinearGradient>
          <LinearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={colors.mountains[0]} />
            <Stop offset="100%" stopColor={colors.mountains[1]} />
          </LinearGradient>
          <LinearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={colors.mountains[1]} />
            <Stop offset="100%" stopColor={colors.mountains[2]} />
          </LinearGradient>
        </Defs>

        {/* Sky background */}
        <Rect x="0" y="0" width={width} height={height} fill="url(#skyGradient)" />

        {/* Sun or Moon */}
        {isNight ? (
          <Circle
            cx={width * 0.8}
            cy={height * 0.2}
            r={width * 0.08}
            fill={colors.moon}
            opacity={0.9}
          />
        ) : (
          <Circle
            cx={width * 0.8}
            cy={height * 0.2}
            r={width * 0.08}
            fill={colors.sun}
            opacity={0.9}
          />
        )}

        {/* Birds (only during day) */}
        {!isNight && (
          <G>
            <Path d="M30,40 C35,35 40,40 45,35 C40,40 45,45 40,45 Z" fill="#333" opacity={0.6} />
            <Path d="M60,30 C65,25 70,30 75,25 C70,30 75,35 70,35 Z" fill="#333" opacity={0.6} />
            <Path
              d="M100,50 C105,45 110,50 115,45 C110,50 115,55 110,55 Z"
              fill="#333"
              opacity={0.6}
            />
          </G>
        )}

        {/* Far mountains */}
        <Path
          d={`M0,${height * 0.6} 
              L${width * 0.2},${height * 0.4} 
              L${width * 0.3},${height * 0.5} 
              L${width * 0.5},${height * 0.3} 
              L${width * 0.7},${height * 0.45} 
              L${width * 0.85},${height * 0.35} 
              L${width},${height * 0.5} 
              L${width},${height} 
              L0,${height} Z`}
          fill="url(#mountainGradient1)"
        />

        {/* Mid mountains */}
        <Path
          d={`M0,${height * 0.65} 
              L${width * 0.15},${height * 0.55} 
              L${width * 0.25},${height * 0.6} 
              L${width * 0.4},${height * 0.5} 
              L${width * 0.5},${height * 0.55} 
              L${width * 0.65},${height * 0.45} 
              L${width * 0.8},${height * 0.55} 
              L${width},${height * 0.6} 
              L${width},${height} 
              L0,${height} Z`}
          fill="url(#mountainGradient2)"
        />

        {/* Rolling hills */}
        <Path
          d={`M0,${height * 0.7} 
              Q${width * 0.2},${height * 0.6} ${width * 0.4},${height * 0.7} 
              Q${width * 0.6},${height * 0.8} ${width * 0.8},${height * 0.7} 
              Q${width * 0.9},${height * 0.65} ${width},${height * 0.75} 
              L${width},${height} 
              L0,${height} Z`}
          fill="url(#hillGradient1)"
        />

        {/* Closer hills */}
        <Path
          d={`M0,${height * 0.8} 
              Q${width * 0.25},${height * 0.7} ${width * 0.5},${height * 0.8} 
              Q${width * 0.75},${height * 0.9} ${width},${height * 0.75} 
              L${width},${height} 
              L0,${height} Z`}
          fill="url(#hillGradient2)"
        />

        {/* Houses */}
        <G>
          {/* House 1 */}
          <Rect
            x={width * 0.2}
            y={height * 0.75}
            width={width * 0.06}
            height={width * 0.04}
            fill={colors.houses[0]}
          />
          <Path
            d={`M${width * 0.19},${height * 0.75} 
                L${width * 0.23},${height * 0.72} 
                L${width * 0.27},${height * 0.75} Z`}
            fill={colors.roofs[0]}
          />

          {/* House 2 */}
          <Rect
            x={width * 0.3}
            y={height * 0.78}
            width={width * 0.05}
            height={width * 0.03}
            fill={colors.houses[1]}
          />
          <Path
            d={`M${width * 0.29},${height * 0.78} 
                L${width * 0.325},${height * 0.75} 
                L${width * 0.36},${height * 0.78} Z`}
            fill={colors.roofs[1]}
          />

          {/* House 3 */}
          <Rect
            x={width * 0.7}
            y={height * 0.76}
            width={width * 0.07}
            height={width * 0.05}
            fill={colors.houses[0]}
          />
          <Path
            d={`M${width * 0.69},${height * 0.76} 
                L${width * 0.735},${height * 0.72} 
                L${width * 0.78},${height * 0.76} Z`}
            fill={colors.roofs[2]}
          />

          {/* House 4 */}
          <Rect
            x={width * 0.5}
            y={height * 0.82}
            width={width * 0.06}
            height={width * 0.04}
            fill={colors.houses[2]}
          />
          <Path
            d={`M${width * 0.49},${height * 0.82} 
                L${width * 0.53},${height * 0.79} 
                L${width * 0.57},${height * 0.82} Z`}
            fill={colors.roofs[1]}
          />
        </G>

        {/* Ground */}
        <Rect x="0" y={height * 0.95} width={width} height={height * 0.05} fill={colors.ground} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
