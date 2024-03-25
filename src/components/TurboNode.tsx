import { memo, ReactNode } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export type Details = {
  image: string;
  text: string;
};

export type TurboNodeData = {
  title: string;
  icon?: ReactNode;
  subline?: string;
  bgcolor?: string;
  details?: Details;
};

export default memo(({ data }: NodeProps<TurboNodeData>) => {
  return (
    <>
      <div className="block">
          <div className="title">{data.title}</div>
            {data.details && (
              <div>
              <img src={data.details.image} alt="Details" />
              <p>{data.details.text}</p>
              </div>
            )}
      </div>
      <div className="details">
        <div className="wrapper gradient">
          <div className="inner">
            <div className="body">
              <div>
                <div className="title">{data.title}</div>
                {/* {data.details && (
                  <div>
                    <img src={data.details.image} alt="Details" />
                    <p>{data.details.text}</p>
                  </div>
                )} */}
              </div>
            </div>
            <div className="note">Note</div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
          </div>
        </div>
      </div>
    </>
  );
});
