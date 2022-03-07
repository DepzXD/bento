import React, { useRef } from 'react';
import Svg, { Circle, G } from 'react-native-svg';
import { View, Animated, TextInput, StyleSheet } from 'react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const CircularProgressBar = ({
  percentage = 60,
  radius = 55,
  strokeWidth = 13,
  duration = 500,
  color = '#A3F7BF',
  strokeColor = '#27323A',
  delay = 0,
  textColor,
  max = 100,
  state,
}) => {
  const circleRef = useRef();
  const inputRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const halfCircle = radius + strokeWidth;
  const circleCircumfrance = 2 * Math.PI * radius;
  const animation = (toValue) => {
    return Animated.timing(animatedValue, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  percentage = state === 'NaN' ? 100 : percentage;
  // color = state === 'NaN' ? '#27323A' : color;

  React.useEffect(() => {
    animation(percentage);
    animatedValue.addListener((v) => {
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          value: `${Math.round(v.value)}`,
          text: `${Math.round(v.value)}`,
        });
      }
      if (circleRef?.current) {
        const maxPer = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumfrance - (circleCircumfrance * maxPer) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cy="50%"
            cx="50%"
            stroke={strokeColor}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <AnimatedCircle
            ref={circleRef}
            cy="50%"
            cx="50%"
            stroke={color}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circleCircumfrance}
            strokeDashoffset={circleCircumfrance}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        useRef={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={state === 'NaN' ? 'NaN' : `Kcal \n${percentage}`}
        multiline={true}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: 18, color: textColor ?? color },
          { fontWeight: 'bold', fontFamily: 'Roboto', textAlign: 'center' },
        ]}
      />
    </View>
  );
};

export default CircularProgressBar;
