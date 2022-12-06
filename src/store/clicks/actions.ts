export type Action = {
    type: 'CHANGE_CLICKS'; 
    payload: number;
};

export const change_Clicks = (clicks: number) => ({
    type: 'CHANGE_CLICKS',
    payload: clicks
}); 


