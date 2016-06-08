/**
 * Created by liuyiru on 16/6/8.
 */
import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import echarts from 'echarts'

class ChartTemp extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        const {dispatch} = this.props
        let charCloudOption = {
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['最高气温','最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {},
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'最低气温',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'arrow',
                                label: {
                                    normal: {
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最大值'
                            }, {
                                symbol: 'circle',
                                x: '60%',
                                y: '50%'
                            }]
                        ]
                    }
                }
            ]
        };

        let mychart = echarts.init(document.getElementById('chartTemp'));
        mychart.setOption(charCloudOption);
    }

    render() {

        return (
            <div id="chartTemp" style={{width: '100%', height: '300px'}}></div>
        )
    }
}
ChartTemp.propTypes = {

}

function mapStateToProps(state) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartTemp)