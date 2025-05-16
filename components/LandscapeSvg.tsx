import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  Ellipse,
} from 'react-native-svg';

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
          {/* <LinearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={colors.sky[0]} />
            <Stop offset="100%" stopColor={colors.sky[1]} />
          </LinearGradient> */}
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
          <RadialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#ffe5b4" stopOpacity="0.8" />
            <Stop offset="100%" stopColor="#FDB813" stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* Sky background - night gradient and stars */}
        {isNight ? (
          <G>
            <Rect x="0" y="0" width={width} height={height} fill="url(#skyGradient)" />
            {/* Stars */}
            <Circle cx={width * 0.12} cy={height * 0.09} r={1.2} fill="#fff" opacity={0.8} />
            <Circle cx={width * 0.18} cy={height * 0.18} r={0.8} fill="#fff" opacity={0.7} />
            <Circle cx={width * 0.32} cy={height * 0.12} r={1.0} fill="#fff" opacity={0.6} />
            <Circle cx={width * 0.65} cy={height * 0.06} r={1.1} fill="#fff" opacity={0.7} />
            <Circle cx={width * 0.84} cy={height * 0.15} r={0.7} fill="#fff" opacity={0.6} />
            <Circle cx={width * 0.94} cy={height * 0.09} r={1.0} fill="#fff" opacity={0.8} />
          </G>
        ) : (
          <Rect x="0" y="0" width={width} height={height} fill="url(#skyGradient)" />
        )}

        {/* Clouds - night: darker and more transparent */}
        {isNight ? (
          <G opacity={0.32}>
            <Ellipse
              cx={width * 0.18}
              cy={height * 0.19}
              rx={width * 0.14}
              ry={height * 0.05}
              fill="#7b8794"
            />
            <Ellipse
              cx={width * 0.68}
              cy={height * 0.14}
              rx={width * 0.18}
              ry={height * 0.06}
              fill="#a3aab7"
            />
          </G>
        ) : (
          <G opacity={0.5}>
            <Ellipse
              cx={width * 0.22}
              cy={height * 0.22}
              rx={width * 0.11}
              ry={height * 0.045}
              fill="#fff"
            />
            <Ellipse
              cx={width * 0.29}
              cy={height * 0.2}
              rx={width * 0.09}
              ry={height * 0.035}
              fill="#f5fafd"
            />
            <Ellipse
              cx={width * 0.65}
              cy={height * 0.17}
              rx={width * 0.13}
              ry={height * 0.055}
              fill="#e9f4fb"
            />
            <Ellipse
              cx={width * 0.8}
              cy={height * 0.23}
              rx={width * 0.09}
              ry={height * 0.033}
              fill="#fff"
            />
          </G>
        )}

        {/* Sun or Moon with glow */}
        {!isNight && (
          <G>
            <Circle
              cx={width * 0.75}
              cy={height * 0.18}
              r={width * 0.13}
              fill="url(#sunGlow)"
              opacity={0.6}
            />
            <Circle
              cx={width * 0.75}
              cy={height * 0.18}
              r={width * 0.08}
              fill={colors.sun}
              opacity={0.95}
            />
          </G>
        )}
        {isNight && (
          <G>
            <Circle
              cx={width * 0.78}
              cy={height * 0.18}
              r={width * 0.12}
              fill="#fff"
              opacity={0.93}
            />
            <Circle
              cx={width * 0.78}
              cy={height * 0.18}
              r={width * 0.19}
              fill="url(#moonGlow)"
              opacity={0.22}
            />
          </G>
        )}

        {/* Birds (only during day) */}
        {!isNight && (
          <G>
            <Path
              d={`M${width * 0.22},${height * 0.12} Q${width * 0.24},${height * 0.1} ${width * 0.26},${height * 0.12}`}
              stroke="#333"
              strokeWidth={2}
              fill="none"
              opacity={0.5}
            />
            <Path
              d={`M${width * 0.28},${height * 0.15} Q${width * 0.3},${height * 0.13} ${width * 0.32},${height * 0.15}`}
              stroke="#333"
              strokeWidth={2}
              fill="none"
              opacity={0.5}
            />
            <Path
              d={`M${width * 0.8},${height * 0.11} Q${width * 0.82},${height * 0.09} ${width * 0.84},${height * 0.11}`}
              stroke="#333"
              strokeWidth={2}
              fill="none"
              opacity={0.5}
            />
          </G>
        )}

        {/* Far mountains - deeper blue at night */}
        <Path
          d={`M0,${height * 0.58}
              Q${width * 0.1},${height * 0.45} ${width * 0.2},${height * 0.52}
              Q${width * 0.28},${height * 0.4} ${width * 0.38},${height * 0.5}
              Q${width * 0.48},${height * 0.35} ${width * 0.6},${height * 0.48}
              Q${width * 0.75},${height * 0.41} ${width * 0.85},${height * 0.48}
              Q${width * 0.94},${height * 0.53} ${width},${height * 0.45}
              L${width},${height}
              L0,${height} Z`}
          fill={isNight ? '#2a3440' : 'url(#mountainGradient1)'}
        />

        {/* Mid mountains - deeper blue at night */}
        <Path
          d={`M0,${height * 0.67}
              Q${width * 0.12},${height * 0.6} ${width * 0.22},${height * 0.65}
              Q${width * 0.34},${height * 0.57} ${width * 0.44},${height * 0.66}
              Q${width * 0.56},${height * 0.61} ${width * 0.66},${height * 0.67}
              Q${width * 0.78},${height * 0.63} ${width * 0.88},${height * 0.68}
              Q${width * 0.94},${height * 0.71} ${width},${height * 0.65}
              L${width},${height}
              L0,${height} Z`}
          fill={isNight ? '#232b36' : 'url(#mountainGradient2)'}
        />

        {/* Rolling hills - night: muted blue/purple, day: gradients */}
        <Path
          d={`M0,${height * 0.77}
              Q${width * 0.13},${height * 0.74} ${width * 0.26},${height * 0.78}
              Q${width * 0.39},${height * 0.81} ${width * 0.52},${height * 0.77}
              Q${width * 0.68},${height * 0.72} ${width},${height * 0.83}
              L${width},${height}
              L0,${height} Z`}
          fill={isNight ? '#23293a' : 'url(#hillGradient1)'}
        />
        <Path
          d={`M0,${height * 0.88}
              Q${width * 0.17},${height * 0.85} ${width * 0.34},${height * 0.89}
              Q${width * 0.52},${height * 0.93} ${width * 0.8},${height * 0.91}
              Q${width * 0.9},${height * 0.87} ${width},${height * 0.95}
              L${width},${height}
              L0,${height} Z`}
          fill={isNight ? '#181c25' : 'url(#hillGradient2)'}
        />

        {/* Houses - night: glowing windows */}
        <G>
          <G>
            <Rect
              x={width * 0.18}
              y={height * 0.85}
              width={width * 0.06}
              height={width * 0.04}
              fill={colors.houses[0]}
              rx={3}
              stroke="#e0e0e0"
              strokeWidth={1}
            />
            <Rect
              x={width * 0.205}
              y={height * 0.875}
              width={width * 0.012}
              height={width * 0.015}
              fill={isNight ? '#ffe082' : '#bdbdbd'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Rect
              x={width * 0.23}
              y={height * 0.87}
              width={width * 0.01}
              height={width * 0.01}
              fill={isNight ? '#fff9c4' : '#90caf9'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Path
              d={`M${width * 0.17},${height * 0.85}
                  L${width * 0.21},${height * 0.82}
                  L${width * 0.25},${height * 0.85} Z`}
              fill={colors.roofs[0]}
              stroke="#b71c1c"
              strokeWidth={1}
            />
          </G>
          <G>
            <Rect
              x={width * 0.38}
              y={height * 0.89}
              width={width * 0.05}
              height={width * 0.03}
              fill={colors.houses[1]}
              rx={2}
              stroke="#e0e0e0"
              strokeWidth={1}
            />
            <Rect
              x={width * 0.405}
              y={height * 0.905}
              width={width * 0.009}
              height={width * 0.012}
              fill={isNight ? '#ffe082' : '#bdbdbd'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Rect
              x={width * 0.425}
              y={height * 0.9}
              width={width * 0.008}
              height={width * 0.008}
              fill={isNight ? '#fff9c4' : '#90caf9'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Path
              d={`M${width * 0.37},${height * 0.89}
                  L${width * 0.405},${height * 0.87}
                  L${width * 0.43},${height * 0.89} Z`}
              fill={colors.roofs[1]}
              stroke="#b71c1c"
              strokeWidth={1}
            />
          </G>
          <G>
            <Rect
              x={width * 0.72}
              y={height * 0.87}
              width={width * 0.07}
              height={width * 0.05}
              fill={colors.houses[0]}
              rx={3}
              stroke="#e0e0e0"
              strokeWidth={1}
            />
            <Rect
              x={width * 0.755}
              y={height * 0.91}
              width={width * 0.014}
              height={width * 0.018}
              fill={isNight ? '#ffe082' : '#bdbdbd'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Rect
              x={width * 0.78}
              y={height * 0.9}
              width={width * 0.012}
              height={width * 0.012}
              fill={isNight ? '#fff9c4' : '#90caf9'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Path
              d={`M${width * 0.71},${height * 0.87}
                  L${width * 0.755},${height * 0.83}
                  L${width * 0.8},${height * 0.87} Z`}
              fill={colors.roofs[2]}
              stroke="#b71c1c"
              strokeWidth={1}
            />
          </G>
          <G>
            <Rect
              x={width * 0.55}
              y={height * 0.93}
              width={width * 0.06}
              height={width * 0.04}
              fill={colors.houses[2]}
              rx={3}
              stroke="#e0e0e0"
              strokeWidth={1}
            />
            <Rect
              x={width * 0.575}
              y={height * 0.955}
              width={width * 0.012}
              height={width * 0.015}
              fill={isNight ? '#ffe082' : '#bdbdbd'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Rect
              x={width * 0.595}
              y={height * 0.95}
              width={width * 0.01}
              height={width * 0.01}
              fill={isNight ? '#fff9c4' : '#90caf9'}
              rx={1}
              opacity={isNight ? 0.88 : 1}
            />
            <Path
              d={`M${width * 0.54},${height * 0.93}
                  L${width * 0.58},${height * 0.9}
                  L${width * 0.62},${height * 0.93} Z`}
              fill={colors.roofs[1]}
              stroke="#b71c1c"
              strokeWidth={1}
            />
          </G>
        </G>

        {/* Trees - night: darker, faint moon highlight */}
        <G>
          <Rect
            x={width * 0.26}
            y={height * 0.83}
            width={width * 0.008}
            height={height * 0.03}
            fill={isNight ? '#3c4a3c' : '#8d6748'}
            rx={1}
          />
          <Ellipse
            cx={width * 0.264}
            cy={height * 0.83}
            rx={width * 0.018}
            ry={height * 0.025}
            fill={isNight ? '#7fbf7f' : '#7ed957'}
            opacity={isNight ? 0.7 : 0.8}
          />
          <Rect
            x={width * 0.48}
            y={height * 0.91}
            width={width * 0.008}
            height={height * 0.028}
            fill={isNight ? '#3c4a3c' : '#8d6748'}
            rx={1}
          />
          <Ellipse
            cx={width * 0.484}
            cy={height * 0.91}
            rx={width * 0.016}
            ry={height * 0.022}
            fill={isNight ? '#a2d8c6' : '#b5ead7'}
            opacity={isNight ? 0.7 : 0.8}
          />
          <Rect
            x={width * 0.88}
            y={height * 0.86}
            width={width * 0.008}
            height={height * 0.032}
            fill={isNight ? '#3c4a3c' : '#8d6748'}
            rx={1}
          />
          <Ellipse
            cx={width * 0.884}
            cy={height * 0.86}
            rx={width * 0.016}
            ry={height * 0.023}
            fill={isNight ? '#b0e7b0' : '#99d98c'}
            opacity={isNight ? 0.7 : 0.8}
          />
        </G>

        {/* Ground */}
        {/* <Rect
          x="0"
          y={height}
          width={width}
          height={height * 0.03}
          fill={isNight ? '#161822' : colors.ground}
        /> */}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
