<template>
  <view>
    <block
      v-for="(weeks, week) in canlender.weeks"
      :key="week">
      <view class="uni-calender__body-date-week">
        <block
          v-for="(day, index) in weeks"
          :key="index">
          <view
            :class="{
              'uni-calender__disable': canlender.month !== day.month || day.disable,
              'uni-calender__date-current':
                ((day.date == canlender.date && !day.checked) || day.multipleBegin || day.multipleEnd) && canlender.month == day.month && !day.disable,
              'uni-calender__lunar': lunar,
              'uni-calender__active': !day.isDay,
              'uni-calender__is-day': day.isDay,
              'uni-calender__multiple': day.multipleBegin || day.multipleEnd,
              'uni-calender__multiple-box': day.checked
            }"
            class="uni-calender__date"
            @tap="selectDays(week, index, canlender.month === day.month, day.disable, canlender.lunar)"
          >
            <view class="uni-calender__circle-box">
              {{ day.date }}
              <view
                v-if="lunar"
                class="uni-calender__lunar">{{ day.lunar }}</view>
              <view
                v-if="day.have"
                class="uni-calender__data-circle" />
              <view
                v-if="day.have && !lunar"
                class="uni-calender__lunar">{{ day.clockinfo.info }}</view>
            </view>
            <view
              :class="{ 'uni-calender_check': day.checked, 'calender_check-begin': day.multipleBegin, 'calender_check-end': day.multipleEnd }"
              class="uni-calender_check-bg"
            />
          </view>
        </block>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  name: 'UniCalendarItem',
  props: {
    /**
		 * 当前日期
		 */
    canlender: {
      type: null,
      default: () => {
        return {}
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {
    selectDays (week, index, ischeck, isDay, lunar) {
      this.$emit('selectDays', {
        week,
        index,
        ischeck,
        isDay,
        lunar
      })
    }
  }
}
</script>

<style lang="scss">
.uni-calender__body-date-week {
	display: flex;
	width: 100%;
	border-bottom: 1px #f5f5f5 solid;

	&:last-child {
		border: none;
	}

	// 日期的样式
	.uni-calender__date {
		position: relative;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #000;
		background: #fff;
		// line-height: 100upx;
		box-sizing: border-box;
		padding: 10upx 0;
		line-height: 1.5;
		z-index: 2;
		.uni-calender__lunar {
			font-size: 20upx;
			color: #000;
			line-height: 1.2;
		}

		.uni-calender__circle-box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 80upx;
			height: 80upx;
			flex-shrink: 0;
			border-radius: 40upx;
			// transition: all 0.2s;
			line-height: 1.2;
		}

		&.uni-calender__lunar {
			// 			padding: 20upx 0;
			// 			line-height: 1.5;
		}

		// 本月禁止的样式
		&.uni-calender__disable {
			color: #f1f1f1;

			.uni-calender__lunar {
				color: #f1f1f1;
			}
		}
		// &.uni-calender__is-day {
		// 	color: #fd2e32;
		// }

		&.uni-calender__is-day {
			color: #fd2e32;
			.uni-calender__lunar {
				color: #fd2e32;
			}
		}

		// 当前选中
		&.uni-calender__date-current {
			// background: #000;
			color: #fff;
			box-sizing: border-box;

			.uni-calender__circle-box {
				background: #fd2e32;
			}

			&.uni-calender__active {
				color: #fff;
				.uni-calender__circle-box {
					background: #00A47C;
				}
			}

			&.uni-calender__multiple {
				.uni-calender__circle-box {
					border-radius: 50%;
					background: #fd2e32;
				}
			}

			.uni-calender__lunar {
				color: #fff;
			}
		}
		&.uni-calender__multiple-box {
			color: #fff;
			.uni-calender__lunar {
				color: #fff;
			}
			// background: skyblue;
		}

		.uni-calender__data-circle {
			position: absolute;
			// bottom: 10rpx;
			top: 5upx;
			right: 5upx;
			// margin: auto;
			width: 10rpx;
			height: 10rpx;
			border-radius: 50%;
			background: #ff5a5f;
			border: 1px #fff solid;
			z-index: 2;
		}
		.uni-calender_check-bg {
			position: absolute;
			top: 10upx;
			bottom: 10upx;
			// width: 100%;
			left: 0;
			right: 0;
			z-index: -1;
			&.uni-calender_check {
				background: #ffd3d3;
			}
			&.calender_check-begin {
				left: 20upx;
				border-top-left-radius: 100upx;
				border-bottom-left-radius: 100upx;
			}
			&.calender_check-end {
				right: 20upx;
				border-top-right-radius: 100upx;
				border-bottom-right-radius: 100upx;
			}
		}
	}
}
</style>
