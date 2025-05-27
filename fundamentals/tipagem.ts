interface IDocument {
  document: string;
  typeDocument: string;
}

interface ILocation {
  cidade: string;
  estado: string;
  pais: string;
}

interface IUser {
  nome: string;
  idade: number;
  email: string;
  senha: string;
  doc?: IDocument;
  location?: ILocation;
}

const usersFiltrados: IUser[] = [];

function addUser(usuario: IUser): void {
  usersFiltrados.push(usuario);
}

function validatorEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

function maiorDeIdade(idade: number): boolean {
  return idade >= 18;
}

function validateDocumentType(doc?: IDocument): boolean {
  if (!doc) return false;
  return doc.typeDocument === "CPF" || doc.typeDocument === "RG";
}

function validateDocumentLength(doc?: IDocument): boolean {
  if (!doc) return false;
  return doc.document.length >= 5;
}

function validateCountry(location?: ILocation): boolean {
  if (!location) return false;
  return location.pais === "BR";
}

function mockRequestAPI(): { items: IUser[]; page: number; perPage: number } {
  return {
    items: [
      {
        nome: "João Silva",
        idade: 8,
        email: "joao.silva@example.com",
        senha: "senha123",
        location: { cidade: "São Paulo", estado: "SP", pais: "BR" },
        doc: { document: "123456789", typeDocument: "CPF" },
      },
      {
        nome: "Maria Oliveira",
        idade: 34,
        email: "maria.oliveira@example.com",
        senha: "qwerty456",
        location: { cidade: "Rio de Janeiro", estado: "RJ", pais: "BR" },
      },
      {
        nome: "Carlos Pereira",
        idade: 15,
        email: "carlos.pereira@example.com",
        senha: "abc12345",
        location: { cidade: "Recife", estado: "PE", pais: "BR" },
      },
      {
        nome: "Ana Souza",
        idade: 30,
        email: "ana.souza@example.com",
        senha: "senhaSegura1",
        doc: { document: "67890", typeDocument: "RG" },
        location: { cidade: "Fortaleza", estado: "CE", pais: "BR" },
      },
      {
        nome: "Pedro Costa",
        idade: 25,
        email: "pample.com",
        senha: "minhaSenha!",
        location: { cidade: "Curitiba", estado: "PR", pais: "BR" },
      },
      {
        nome: "Fernanda Lima",
        idade: 7,
        email: "fernanda.lima@example.com",
        senha: "passWord2",
        location: { cidade: "Manaus", estado: "AM", pais: "BR" },
      },
      {
        nome: "Lucas Fernandes",
        idade: 31,
        email: "lucas.fernandes@example.com",
        senha: "senhaForte#",
        location: { cidade: "Porto Alegre", estado: "RS", pais: "BR" },
      },
      {
        nome: "Juliana Rocha",
        idade: 16,
        email: "juliana.rocha@example.com",
        senha: "rocha2025",
      },
      {
        nome: "Rafael Martins",
        idade: 26,
        email: "rafael.martinsle.com",
        senha: "martins789",
        location: { cidade: "Salvador", estado: "BA", pais: "AR" },
        doc: { document: "12", typeDocument: "CNH" },
      },
      {
        nome: "Beatriz Santos",
        idade: 33,
        email: "beatriz.santos@example.com",
        senha: "santos000",
        doc: { document: "112233", typeDocument: "CPF" },
        location: { cidade: "Natal", estado: "RN", pais: "BR" },
      },
    ],
    page: 1,
    perPage: 10,
  };
}

const handleUser = () => {
  const data = mockRequestAPI();
  const { items } = data;

  for (let user of items) {
    const isValidEmail = validatorEmail(user.email);
    const isValidAge = maiorDeIdade(user.idade);
    const isValidDocType = validateDocumentType(user.doc);
    const isValidDocLength = validateDocumentLength(user.doc);
    const isValidCountry = validateCountry(user.location);

    if (
      isValidEmail &&
      isValidAge &&
      isValidDocType &&
      isValidDocLength &&
      isValidCountry
    ) {
      addUser(user);
    }
  }

  console.log(usersFiltrados);
};

handleUser();
