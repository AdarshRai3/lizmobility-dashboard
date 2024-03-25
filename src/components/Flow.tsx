import { useCallback } from 'react';
import ReactFlow, { Controls, useNodesState, useEdgesState, addEdge, Node, Edge} from 'reactflow';
import 'reactflow/dist/base.css';
import TurboNode, { TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';


const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x:-500, y: 0 },
    data: { 
      title: 'Project',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This is the project panel contains the information about the car manufacturing project',
      }
    },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x:-250, y: -250 },
    data: {
      title: 'Market Research',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This phase involves conducting market research to understand the needs and preferences of the customers.',
      }
    },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: -250, y: -125 },
    data: { 
      title: 'Planning',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'In this phase, the project plan is developed including the timeline, resources, and cost estimates.',
      }
    },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: -250, y: 0 },
    data: { 
      title: 'Design',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'The design phase involves creating detailed designs for the new vehicle including its appearance, features, and specifications.',
      }
    },
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: -250, y: 125 },
    data: {
      title: 'Manufacturing',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This phase involves the actual production of the vehicle based on the designs.',
      }
    },
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: -250, y: 250 },
    data: { 
      title: 'Sales',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'In the final phase, the new vehicle is marketed and sold to customers.',
      }
    },
    type: 'turbo',
  },
  {
    id: '7',
    position: { x: 0, y: -300 },
    data: { 
      title: 'External',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the external factors that might affect the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '8',
    position: { x: 0, y: -200 },
    data: { 
      title: 'Internal',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the internal factors that might affect the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '9',
    position: { x: 250, y: -350 },
    data: { 
      title: 'B2B',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the business-to-business interactions in the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '10',
    position: { x: 250, y: -250},
    data: { 
      title: 'B2C',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the business-to-consumer interactions in the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '11',
    position: { x: 500, y: -400},
    data: { 
      title: 'Online',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the online aspects of the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '12',
    position: { x: 500, y: -300},
    data: { 
      title: 'Interview',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the interviews conducted during the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '13',
    position: { x: 500, y: -200,},
    data: { 
      title: 'Public Data',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the public data used in the car manufacturing project.',
      }
    },
    type: 'turbo',
  },
  {
    id: '14',
    position: { x: 500, y: -100},
    data: { 
      title: 'Health',
      details:{
        image: 'https://reactflow.dev/img/logo.svg',
        text: 'This panel represents the health considerations in the car manufacturing project.',
      }
    },
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
