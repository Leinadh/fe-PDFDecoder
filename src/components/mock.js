export const dict_variables = {
  'CAJA Y BANCOS': ['CAJA Y BANCOS', 'EFECTIVO Y EQUIBALENTES EN EFECTIVO'],
  'TOTAL ACTIVO': ['TOTAL ACTIVO', 'SUMA DE LOS ACTIVOS', 'ACTIVO TOTAL'],
  'TOTAL PASIVO': ['TOTAL PASIVO', 'SUMA DE LOS PASIVOS', 'PASIVO TOTAL'],
  'TOTAL PATRIMONIO': [
    'TOTAL PATRIMONIO',
    'SUMA DE LOS PATRIMONIOS',
    'PATRIMONIO TOTAL',
    'PATRIMONIO',
    'SUMA EL CAPITAL CONTABLE',
    'TOTAL CAPITAL CONTABLE',
    'TOTAL CAPITAL CONTABLE',
  ],
  VENTAS: [
    'VENTAS',
    'VENTAS POR OPERACION ORDINACIA',
    'INGRESOS POR OPERACION',
    'INGRESOS POR OPERACION ORDINARIA',
    'INGRESOS OPERACIONALES',
    'VENTAS BRUTAS',
    'INGRESO POR ACTIVIDADES ORDINARIAS',
  ],
  'COSTO DE VENTAS': [
    'COSTOS DE VENTAS',
    'COSTOS POR VENTAS',
    'COSTO DE ACTIVIDADES ORDINARIAS',
  ],
  'UTILIDAD BRUTA': ['UTILIDAD BRUTA', 'PERDIDA BRUTA'],
  'UTILIDAD OPERACIONAL': ['UTILIDAD OPERACIONAL', 'PERDIDA OPERACIONAL'],
  'UTILIDAD ANTES DE IMPUESTOS': [
    'UTILIDAD ANTES DE IMPUESTOS',
    'PERDIDA ANTES DE IMPUESTOS',
  ],
  'UTILIDAD NETA': ['UTILIDAD NETA', 'PERDIDA NETA'],
};

export const mock_response = {
  'CAJA Y BANCOS': '7,075,758',
  'TOTAL ACTIVO': '135,448,018',
  'TOTAL PASIVO': '75,103,896',
  'TOTAL PATRIMONIO': NaN,
  FECHA: 2019,
  'COSTO DE VENTAS': '(44,957,508)',
  'UTILIDAD BRUTA': '25,889,261',
  'UTILIDAD ANTES DE IMPUESTOS': NaN,
};

export const mock_response_completo = {
  'CAJA Y BANCOS': 1,
  'TOTAL ACTIVO': 2,
  'TOTAL PASIVO': 3,
  'TOTAL PATRIMONIO': 4,
  VENTAS: 5,
  FECHA: 2019,
  DOCUMENTO: 'balance.png',
  'UNIDADES DE MEDIDA': 'Dolares',
  'COSTO DE VENTAS': 6,
  'UTILIDAD BRUTA': 7,
  'UTILIDAD OPERACIONAL': 8,
  'UTILIDAD ANTES DE IMPUESTOS': 9,
  'UTILIDAD NETA': 10,
};
