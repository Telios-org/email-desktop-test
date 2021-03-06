import React from 'react';

type Props = {
  className: string;
  onClick: () => void;
};

const Reply = (props: Props) => {
  const { className, onClick } = props;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      className={className}
      onClick={onClick}
      fill="currentColor"
      x="0px"
      y="0px"
      viewBox="0 0 377.079 377.079"
    >
      <g>
        <g>
          <g>
            <path
              d="M211.6,180.539H27.2l142.4-142.4c3.2-3.2,3.2-8,0-11.2c-3.2-3.2-8-3.2-11.2,0l-156,156c-3.2,3.2-3.2,8,0,11.2l156,156
				c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4c3.2-3.2,3.2-8,0-11.2l-142.4-142.4h184.4c54,0,104.4,29.2,131.6,76c1.6,2.4,4,4,6.8,4
				c1.2,0,2.8-0.4,4-1.2c4-2.4,5.2-7.2,2.8-10.8C326.8,212.539,271.2,180.539,211.6,180.539z"
            />
            <path
              d="M376.8,318.539l-2.4-10c-1.2-4.4-5.2-6.8-9.6-6c-4.4,1.2-6.8,5.2-6,9.6l2.4,10c0.8,3.6,4,6,7.6,6c0.8,0,1.2,0,2-0.4
				C375.2,327.339,378,322.939,376.8,318.539z"
            />
          </g>
        </g>
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
};

export default Reply;
