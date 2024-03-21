import { useCallback } from 'react';
import ReactFlow, { Controls, useNodesState, useEdgesState, addEdge, Node, Edge } from 'reactflow';
import 'reactflow/dist/base.css';
import TurboNode, { TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';


const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x:-500, y: 0 },
    data: { title: 'Project'},
    type: 'turbo',
  },
  {
    id: '2',
    position: { x:-250, y: -250 },
    data: {title: 'Research'},
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: -250, y: -125 },
    data: { title: 'Planning'},
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: -250, y: 0 },
    data: { title: 'Designing'},
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: -250, y: 125 },
    data: {title: 'Manufacturing'},
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: -250, y: 250 },
    data: { title: 'Marketing/Sales'},
    type: 'turbo',
  },
  {
    id: '7',
    position: { x: 0, y: -300 },
    data: { title: 'External'},
    type: 'turbo',
  },
  {
    id: '8',
    position: { x: 0, y: -200 },
    data: { title: 'Internal'},
    type: 'turbo',
  },
  {
    id: '9',
    position: { x: 250, y: -350 },
    data: { title: 'B2B'},
    type: 'turbo',
  },
  {
    id: '10',
    position: { x: 250, y: -250},
    data: { title: 'B2C'},
    type: 'turbo',
  },
  {
    id: '11',
    position: { x: 500, y: -400},
    data: { title: 'Online'},
    type: 'turbo',
  },
  {
    id: '12',
    position: { x: 500, y: -300},
    data: { title: 'Interview'},
    type: 'turbo',
  },
  {
    id: '13',
    position: { x: 500, y: -200,},
    data: { title: 'Public Data'},
    type: 'turbo',
  },
  {
    id: '14',
    position: { x: 500, y: -100},
    data: { title: 'Health'},
    type: 'turbo',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
  },
  {
    id: 'e1-5',
    source: '1',
    target: '5',
  },
  {
    id: 'e1-6',
    source: '1',
    target: '6',
  },
  {
    id: 'e2-7',
    source: '2',
    target: '7',
  },
  {
    id: 'e2-8',
    source: '2',
    target: '8',
  },
  {
    id: 'e7-9',
    source: '7',
    target: '9',
  },
  {
    id: 'e7-10',
    source: '7',
    target: '10',
  },
  {
    id: 'e9-11',
    source: '9',
    target: '11',
  },
  {
    id: 'e9-12',
    source: '9',
    target: '12',
  },
  {
    id: 'e9-13',
    source: '9',
    target: '13',
  },
  {
    id: 'e9-14',
    source: '9',
    target: '14',
  },

];

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle',
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params:any) => setEdges((els) => addEdge(params, els)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
    >
      <Controls showInteractive={false} />
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 10 10"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle stroke="#2a8af6" strokeOpacity="0.75" r="2" cx="0" cy="0" />
          </marker>
        </defs>
      </svg>
    </ReactFlow>
  );
};

export default Flow;
