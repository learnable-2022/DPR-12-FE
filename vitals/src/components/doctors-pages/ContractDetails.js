import ContractABI from '../../ContractABI.json'


const ethers = require('ethers');

const Alchemy_ID = "GpRAIJXc0iALE9ywB2GXOR-tyifV3T5A";
const provider = new ethers.providers.AlchemyProvider("goerli", Alchemy_ID);
const address = '0x9F67e09bd19A1c826A34caD48e5d9c7A42aeeaAB'
const ABI = ContractABI

const contract = new ethers.Contract(address, ABI, provider)

async function handleSubmit(){
    const patientAddress = '0x08755B4d595AFA790d760CF499778f8ff610607E'

    const response = await contract.updateLabResults(patientAddress, ["label", "status"])

} 
handleSubmit();