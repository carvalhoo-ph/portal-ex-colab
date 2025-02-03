import http from 'k6/http';
import { check, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export let options = {
  stages: [
    { duration: '2m', target: 30 }, // ramp up to 30 users over 2 minutes
    { duration: '3m', target: 30 }, // stay at 30 users for 3 minutes
    { duration: '2m', target: 0 },  // ramp down to 0 users over 2 minutes
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser menores que 500ms
  },
};

export default function () {
  let res = http.get('https://portal-ex-colab-github-s3.s3.amazonaws.com/index.html'); // Substitua com a URL do seu bucket S3
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'summary.json': JSON.stringify(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
