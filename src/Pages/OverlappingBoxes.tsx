import React from 'react';

interface OverlappingBoxesProps {
  text: string;
}

const OverlappingBoxes: React.FC<OverlappingBoxesProps> = ({ text }) => {
  return (
    <div className="box-wrapper">
        <div className="box-background">
            <div className="box-foreground">
                {text}
            </div>
        </div>
    </div>
  );
};

export default OverlappingBoxes;