interface Cell {
    Value?: string;
}

interface Row {
    RowType: "Header" | "Row" | "SummaryRow";
    Cells: Cell[];
}

interface Section {
    RowType: "Section";
    Title?: string;
    Rows: Row[];
}

export interface BalanceSheetResponse {
    ReportID: string;
    ReportName: string;
    ReportType: string;
    ReportTitles: string[];
    ReportDate: string;
    UpdatedDateUTC?: string;
    Fields?: any[];
    Rows: (Row | Section)[];
}
