import styled from 'styled-components';
import feather from 'feather-icons';
import PropTypes from 'prop-types';
import { Buffer } from 'buffer';

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({
  iconName,
  size = 24,
  strokeWidth = 1,
  rotate = 0,
  color = '#000',
  ...props
}) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: `rotate(${rotate}deg)`,
  };

  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };

  const icon = feather.icons[iconName];
  const svg = icon ? icon.toSvg(iconStyle) : '';
  const base64 = Buffer.from(svg, 'utf8').toString('base64');

  return (
    <IconWrapper {...props} style={shapeStyle}>
      <img src={`data:image/svg+xml; base64, ${base64}`} alt={iconName} />
    </IconWrapper>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  rotate: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
