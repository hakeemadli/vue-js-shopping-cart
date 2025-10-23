export default function removeItem(pid) {
    this.items = this.items.filter( item => item.id !== pid)
}