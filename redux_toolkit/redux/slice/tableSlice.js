import { createSlice } from "@reduxjs/toolkit";
import { getLocal, setLocal } from "../../util/CommonHelper";
import {
    transactionTableConfig as tc,
    settlementTableConfig as sc,
    refundTableConfig as rc,
    merchantTableConfig as mc,
    actionSettlementTableConfig as avs,
    payoutTableConfig as payoutConfig,
} from "../../util/ConfigHelper";


function FilteredTableConfig(tableConfig, excludeProps = ["filters", "searchItems", "fieldNames", "popup"]) {
    return Object.fromEntries(Object.entries(tableConfig).filter(([key, value]) => !excludeProps.includes(key)));
 }
  const tcConfig =FilteredTableConfig(tc);
  const rcConfig =FilteredTableConfig(rc);
  const scConfig =FilteredTableConfig(sc);
  const mcConfig =FilteredTableConfig(mc);
  const avsConfig =FilteredTableConfig(avs);
  const payConfig =FilteredTableConfig(payoutConfig);

const initialState = {
    transactions: {
        ...getLocal(tcConfig),
    },
    refunds: {
        ...getLocal(rcConfig),
    },
    settlements: {
        ...getLocal(scConfig),
    },
    merchants: {
        ...getLocal(mcConfig),
    },
    actionSettlement: {
        ...getLocal(avsConfig),
    },
    payouts: {
        ...getLocal(payConfig),
    },
    
};

const removeEmptyValues = (obj) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== ""));

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTableProps: (state, action) => {
            const { table, updates } = action.payload;
            return {
                ...state,
                [table]: {
                    ...state[table],
                    ...updates,
                },
            };
        },
        setParams: (state, action) => {
            const { table, updates } = action.payload;
            return {
                ...state,
                [table]: {
                    ...state[table],
                    params: removeEmptyValues({
                        ...state[table].params,
                        ...updates,
                    }),
                },
            };
        },
        resetParams: (state, action) => {
            const { table } = action.payload;
            return {
                ...state,
                [table]: {
                    ...state[table],
                    params: {
                        page: 1,
                        perPage: 10,
                    },
                },
            };
        },
        resetTable: (state) => {
            return {
                transactions: { ...tcConfig },
                refunds: { ...rcConfig },
                settlements: { ...scConfig },
                merchants: { ...mcConfig },
                actionSettlement: { ...avsConfig },
                payouts: { ...payConfig },
            };
        }
    },
});
export const { setTableProps, setParams, resetParams,resetTable } = tableSlice.actions;
export default tableSlice.reducer;
