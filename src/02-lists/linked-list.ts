/**
 * Representa um nó individual em uma lista duplamente encadeada.
 * Cada nó armazena um valor (`value`) e referências para o nó anterior (`prev`)
 * e o próximo nó (`next`) na lista.
 */
class Node<T> {
  next: Node<T> | null = null
  prev: Node<T> | null = null

  constructor(public value: T) {}
}

/**
 * Implementação de uma Lista Duplamente Encadeada (Doubly Linked List).
 *
 * Existem três tipos principais de listas encadeadas:
 * - Lista Simplesmente Encadeada: Cada nó aponta apenas para o próximo nó.
 * - Lista Duplamente Encadeada: Cada nó aponta para o nó anterior e para o próximo.
 * - Lista Circular Encadeada: O último nó aponta para o primeiro.
 *
 * Esta classe implementa uma lista duplamente encadeada, onde a navegação é possível
 * em ambas as direções (para frente e para trás).
 */
export class List<T> {
  protected head: Node<T> | null = null
  protected tail: Node<T> | null = null

  /**
   * Cria uma nova instância da lista.
   * Pode ser inicializada com um array de valores, que serão adicionados à lista.
   *
   * @param values Um array de valores para popular a lista inicialmente.
   */
  constructor(values: ReadonlyArray<T> = []) {
    values.forEach((value) => this.push(value))
  }

  /**
   * Adiciona um novo valor ao final da lista (cauda).
   *
   * Se a lista estiver vazia, o novo nó se torna tanto a cabeça (`head`) quanto a cauda (`tail`).
   * Caso contrário, o novo nó é adicionado após a cauda atual, e a cauda é atualizada.
   *
   * @param value O valor a ser adicionado à lista.
   */
  public push(value: T) {
    if (this.tail === null) {
      const node = new Node(value)
      this.head = node
      this.tail = node
    } else {
      const node = new Node(value)
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
  }

  /**
   * Remove e retorna o último valor da lista (cauda).
   *
   * Se a lista estiver vazia, retorna `undefined`.
   * A cauda (`tail`) é atualizada para o nó anterior. Se a lista ficar vazia
   * após a remoção, a cabeça (`head`) também é definida como `null`.
   *
   * @returns O valor removido ou `undefined` se a lista estiver vazia.
   */
  pop(): T | undefined {
    if (this.tail === null) {
      return undefined
    }
    const value = this.tail.value
    this.tail = this.tail.prev
    if (this.tail !== null) {
      this.tail.next = null
    } else {
      this.head = null
    }
    return value
  }

  /**
   * Converte a lista encadeada em um array.
   *
   * Itera sobre a lista a partir da cabeça (`head`) e coleta os valores de cada nó
   * em um novo array.
   *
   * @returns Um array contendo todos os valores da lista na ordem correta.
   */
  toArray(): Array<T> {
    let node = this.head
    const result: Array<T> = []
    while (node !== null) {
      result.push(node.value)
      node = node.next
    }
    return result
  }

  /**
   * Gera uma representação em string da lista para fins de depuração.
   *
   * A string mostra o valor de cada nó, juntamente com os valores de seus vizinhos
   * (anterior e próximo), no formato `|anterior:valor:proximo|`.
   *
   * @returns Uma string que representa o estado atual da lista.
   */
  toString() {
    let node = this.head
    const result: Array<string> = ['']
    while (node !== null) {
      result.push(`${node.prev?.value ?? ' '}:${node.value}:${node.next?.value ?? ' '}`)
      node = node.next
    }
    return result.concat('').join('|')
  }
}
