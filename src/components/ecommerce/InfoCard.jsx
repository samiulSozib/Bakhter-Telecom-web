import { useDispatch, useSelector } from "react-redux";
import {
  ArrowUpIcon,
  GroupIcon,
  // GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";
import { useEffect } from "react";
import {dashboardData} from '../../redux/actions/dashboardAction'
import { useTranslation } from "react-i18next";


export default function InfoCard() {
  const dispatch = useDispatch()
  const { information } = useSelector((state) => state.dashboardReducer);
  const { user_info } = useSelector((state) => state.auth);
  const {t}=useTranslation()


  useEffect(()=>{
    dispatch(dashboardData())
  },[dispatch])



  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="h-[150px] rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12">
        <span className="text-sm text-gray-500 dark:text-gray-400">
              {t('BALANCE')}
            </span>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <GroupIcon/>
            </span>
            <span className="mt-2 font-bold text-gray-800 text-xl dark:text-white/90">
              {information.balance} {user_info?.currency?.code}
            </span>
          </div>
          {/* <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="h-[150px] rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12">
        <span className="text-sm text-gray-500 dark:text-gray-400">
              {t('LOAN_BALANCE')}
            </span>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <GroupIcon/>
            </span>
            <span className="mt-2 font-bold text-gray-800 text-xl dark:text-white/90">
              {information.loan_balance} {user_info?.currency?.code}
            </span>
          </div>
          {/* <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
      <div className="h-[150px] rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12">
        <span className="text-sm text-gray-500 dark:text-gray-400">
              {t('SALE')}
            </span>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <GroupIcon/>
            </span>
            <span className="mt-2 font-bold text-gray-800 text-xl dark:text-white/90">
              {information.today_sale} {user_info?.currency?.code}
            </span>
          </div>
          {/* <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
      <div className="h-[150px] rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12">
        <span className="text-sm text-gray-500 dark:text-gray-400">
              {t('PROFIT')}
            </span>
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <GroupIcon/>
            </span>
            <span className="mt-2 font-bold text-gray-800 text-xl dark:text-white/90">
              {information.today_profit} {user_info?.currency?.code}
            </span>
          </div>
          {/* <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge> */}
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
