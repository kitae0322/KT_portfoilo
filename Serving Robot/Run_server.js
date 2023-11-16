const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/run-command0', (req, res) => {
  // 특정 명령을 실행
  exec('say "I am returning to the kitchen"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Command execution failed');
    }
    console.log(`Command output: ${stdout}`);
    return res.send('Command executed successfully');
  });
});

app.get('/run-command1', (req, res) => {
  // 특정 명령을 실행
  exec('say "On my way to table1."', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Command execution failed');
    }
    console.log(`Command output: ${stdout}`);
    return res.send('Command executed successfully');
  });
});

app.get('/run-command2', (req, res) => {
  // 특정 명령을 실행
  exec('say "On my way to table2."', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Command execution failed');
    }
    console.log(`Command output: ${stdout}`);
    return res.send('Command executed successfully');
  });
});

app.get('/run-command3', (req, res) => {
  // 특정 명령을 실행
  exec('say "On my way to table3." && t3', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Command execution failed');
    }
    console.log(`Command output: ${stdout}`);
    return res.send('Command executed successfully');
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
