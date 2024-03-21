import  { memo, ReactNode } from 'react'
import { Handle, NodeProps, Position } from 'reactflow';
import { FiCloud } from 'react-icons/fi';

export type TurboNodeData = {
  title: string;
  icon?: ReactNode;
  subline?: string;
  bgcolor?:string;
  details?:string;
};

export default memo(({ data }: NodeProps<TurboNodeData>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>
          <FiCloud />
        </div>
      </div>
      <div className="wrapper gradient">
        <div className="inner">
         
          <div className="body">
             <div>
               <div className="title">{data.title}</div>
               <span>
               {data.details && <div className="details">{data.details}</div>}
               </span>
             </div>
          </div>
         
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </div>
      </div>
    </>
  );
});
