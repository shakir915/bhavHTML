export interface Trade {
  dateMilli: number;
  qty: number;
  symbol: string;
  tradePNL: number;
  type: string;
  value: number;
  positionTradedPrice?: number;
}

export interface DateEntry {
  bill: number;
  dateMilli: number;
  expense: number;
  grossBill: number;
  ntpl: number;
  tpl: number;
  trades: Trade[];
  name?: string;
}

export interface FiscalYear {
  grossBill: number;
  netBill: number;
  netTPL: number;
  title: string;
  tpl: number;
  pnl: DateEntry[];
}

// PnLData is now an array of FiscalYear objects
export type PnLData = FiscalYear[];
