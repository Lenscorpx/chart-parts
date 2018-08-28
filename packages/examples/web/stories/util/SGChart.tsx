import * as React from 'react'
import { Orchestrator } from '@markable/orchestrator'
import { Renderer } from '@markable/react-svg-renderer'

const pipeline = new Orchestrator(new Renderer())
export interface SGChartProps {
	data: any
	width?: number
	height?: number
	origin?: [number, number]
}
export const SGChart: React.SFC<SGChartProps> = ({
	data,
	width = 200,
	height = 200,
	origin = [0, 0] as [number, number],
}) => pipeline.renderScenegraph(data, { width, height, origin })