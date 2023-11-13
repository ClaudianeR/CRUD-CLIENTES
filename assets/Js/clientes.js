const tableData = document.getElementById("tableContent");
const btnAddClient = document.getElementById("addClient");
const modal = document.getElementById("modal");
const clientName = document.getElementById("clientName");
const clientCel = document.getElementById("clientCel");
const clientEmail = document.getElementById("clientEmail");
const ClientAdress = document.getElementById("ClientAdress");
const btnSave = document.getElementById("btn-Save");
const btnCancel = document.getElementById("btn-Cancel");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

const clientes = [
  {
    nome: "Claudiane Gomes Rodrigues",
    telefone: "85 988894142",
    email: "claudiane.gomes@gmail.com",
    endereço: "Rua das flores, 52",
  },
  {
    nome: "Maria Tavares Lima",
    telefone: "85 988894142",
    email: "maria.tav@gmail.com",
    endereço: "Rua Vicente Linhares, 49",
  },
  {
    nome: "Murilo Carneiro Rodrigues ",
    telefone: "85 988999999",
    email: "jmurilo@hotmail.com",
    endereço: "Rua Santos Dumont, 101",
  },
];

function createTableBodyRow(nome, telefone, email, endereço, id) {
  const html = `
    <tr class="even:bg-sky-100 odd:  bg-gray-50">
      <td class="p-3">${nome}</td>
      <td class="p-3">${telefone}</td>
      <td class="p-3">${email}</td>
      <td class="p-3">${endereço}</td>
      <td class="flex gap-2 items-center justify-center p-3">
        <button onclick="updateClient(${id})" class="py-1 px-2 bg-sky-700 text-white rounded md">Editar</button>
        <button onclick="deleteClient(${id})" class="py-1 px-2 bg-red-800 text-white rounded md">Deletar</button>
      </td>
    </tr>`;

  return html;
}

function renderDataTable() {
  tableData.innerHTML = "";
  clientes.forEach((client, index) => {
    tableData.innerHTML += createTableBodyRow(
      client.nome,
      client.telefone,
      client.email,
      client.endereço,
      index
    );
  });
}

function addClient() {
  if (clientName.value && clientCel.value && clientEmail.value && ClientAdress.value) {
     
    clientes.push({
      nome: clientName.value,
      telefone: clientCel.value,
      email: clientEmail.value,
      endereço: ClientAdress.value,
    });
    renderDataTable();
    closeModal();
  } else {
    showErrorMessage();
  }
}

renderDataTable();

btnAddClient.addEventListener("click", openModal);

btnSave.addEventListener("click", (e) => {
  e.preventDefault();
  addClient();
  
});

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
});

function updateClient(id) {
  openModal();
  const cliente = clientes.find((client, index) => index === id);

  clientName.value = cliente.nome;
  clientCel.value = cliente.telefone;
  clientEmail.value = cliente.email;
  ClientAdress.value = cliente.endereço;

  if (cliente) {
      clientes.splice(id, 1);

      tableContent.innerHTML = ""; 

      clientes.map((cliente, index) => {
          tableContent.innerHTML += `
              <tr class="even:bg-sky-100 odd:  bg-gray-50">
                <td class="p-3">${cliente.nome}</td>
                <td class="p-3">${cliente.telefone}</td>
                <td class="p-3">${cliente.email}</td>
                <td class="p-3">${cliente.endereço}</td>
                <td class="flex gap-2 items-center justify-center p-3">
                  <button onclick="updateClient(${id})" class="py-1 px-2 bg-sky-700 text-white rounded md">Editar</button>
                  <button onclick="deleteClient(${id})" class="py-1 px-2 bg-red-800 text-white rounded md">Deletar</button>
                </td>
              </tr>`;
      });
  } else {
    showErrorMessage();
  }
}


function deleteClient(id) {
  clientes.splice(id, 1);
  renderDataTable();
}

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  closeErrorMessage();
  form.reset();
}

function showErrorMessage() {
  errorMessage.classList.remove("hidden");
  errorMessage.classList.add("block");
}

function closeErrorMessage() {
  errorMessage.classList.remove("block");
  errorMessage.classList.add("hidden");
}






  